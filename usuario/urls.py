from django.urls import path
from . import views as v
from django.contrib.auth.views import LoginView, LogoutView
from django.conf import settings
from django.conf.urls.static import static

app_name = 'usuario'

urlpatterns = [
    path('login/', LoginView.as_view(template_name='usuario/login.html'), name="login")
]