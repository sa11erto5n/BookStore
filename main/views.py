from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

def home(request):
    return render(request,'main/home.html')

@login_required
def Profile(request):
    context = {}
    user = request.user
    context['user'] = user
    return render(request,'main/profile.html',context=context)
