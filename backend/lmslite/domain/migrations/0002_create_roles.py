from django.db import migrations

def create_roles(apps, schema_editor):
    Role = apps.get_model('domain', 'Role')
    for name, slug in [
        ("Admin", "admin"),
        ("Instructor", "instructor"),
        ("Student", "student"),
    ]:
        Role.objects.get_or_create(name=name, slug=slug)

class Migration(migrations.Migration):
    dependencies = [
        # Ajuste o nome da migration inicial conforme necessário
        ("domain", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(create_roles),
    ]
