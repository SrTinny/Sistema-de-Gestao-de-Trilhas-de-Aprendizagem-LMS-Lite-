# -*- coding: utf-8 -*-
from lmslite.domain.models import Course

def run():
    if Course.objects.exists():
        print('Cursos já existem. Nenhum seed criado.')
        return
    Course.objects.create(
        title='Python para Iniciantes',
        description='Aprenda Python do zero com exemplos práticos.',
        instructor_name='João Silva',
        thumbnail='https://placehold.co/400x200?text=Python',
        duration='8h'
    )
    Course.objects.create(
        title='React Essencial',
        description='Construa interfaces modernas com React.',
        instructor_name='Maria Souza',
        thumbnail='https://placehold.co/400x200?text=React',
        duration='12h'
    )
    Course.objects.create(
        title='Banco de Dados PostgreSQL',
        description='Domine consultas e modelagem no PostgreSQL.',
        instructor_name='Carlos Lima',
        thumbnail='https://placehold.co/400x200?text=PostgreSQL',
        duration='10h'
    )
    print('Seed de cursos criado com sucesso!')

run()