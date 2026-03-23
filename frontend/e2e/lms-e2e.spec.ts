import { test, expect } from '@playwright/test';

// Ajuste as credenciais e URLs conforme necessário para o ambiente local
const USERNAME = 'student1';
const PASSWORD = 'studpass';
const BASE_URL = 'http://localhost:5173';

// Teste E2E: login -> dashboard -> detalhes do curso

test.describe('Fluxo E2E LMS Lite', () => {
  test('Usuário faz login, vê dashboard e acessa detalhes do curso', async ({ page }) => {
    // Login
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[placeholder="Usuário"]', USERNAME);
    await page.fill('input[placeholder="Senha"]', PASSWORD);
    await page.click('button[type="submit"]');

    // Dashboard
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('h1')).toHaveText(/Catálogo de Cursos/);
    // Aguarda pelo menos um card de curso
    const courseLink = page.locator('a', { hasText: 'Acessar Curso' }).first();
    await expect(courseLink).toBeVisible();

    // Detalhes do curso
    await courseLink.click();
    await expect(page).toHaveURL(/\/courses\//);
    await expect(page.locator('h1')).not.toHaveText('');
    await expect(page.locator('text=Progresso')).toBeVisible();
  });
});
