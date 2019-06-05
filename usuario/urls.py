from django.urls import path
from . import views as v
from django.contrib.auth.views import LoginView, LogoutView

app_name = 'usuario'

urlpatterns = [
    path('login/', LoginView.as_view(template_name='usuario/login.html'), name="login")
]