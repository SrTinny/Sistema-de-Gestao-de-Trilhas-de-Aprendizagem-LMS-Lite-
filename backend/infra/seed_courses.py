from lmslite.domain.models import Course

def run():
    courses = [
        {
            "title": "Python para Iniciantes",
            "description": "Aprenda Python do zero, com exemplos práticos.",
            "instructor_name": "João Silva",
            "thumbnail": "https://placehold.co/400x200/python",
            "duration": "10h"
        },
        {
            "title": "Django REST Framework Essencial",
            "description": "Construa APIs robustas com Django e DRF.",
            "instructor_name": "Maria Souza",
            "thumbnail": "https://placehold.co/400x200/drf",
            "duration": "8h"
        },
        {
            "title": "React para Frontend Moderno",
            "description": "Desenvolva SPAs com React e hooks.",
            "instructor_name": "Carlos Lima",
            "thumbnail": "https://placehold.co/400x200/react",
            "duration": "12h"
        },
    ]
    for data in courses:
        obj, created = Course.objects.get_or_create(title=data["title"], defaults=data)
        if created:
            print(f"Curso criado: {obj.title}")
        else:
            print(f"Curso já existe: {obj.title}")

if __name__ == "__main__":
    run()
