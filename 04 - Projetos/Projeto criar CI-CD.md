
### **3. Ferramentas Recomendadas para CI/CD no CentOS Stream**

Você pode configurar um pipeline simples com:

- **Git** (controle de versão).
    
- **Jenkins** ou **GitLab Runner** (automação de pipelines).
    
- **Docker/Podman** (para containers).
    
- **Ansible** (automação de deploys).
    
- **Kubernetes (Minikube/K3s)** (se quiser orquestração).
    

Exemplo de instalação no CentOS Stream:

bash

Copy

# Instalar Git, Docker e Jenkins
sudo dnf install git docker-ce jenkins
sudo systemctl start docker
sudo systemctl enable docker jenkins

---

### **4. Prós e Contras do CentOS Stream para CI/CD**

✅ **Prós**:

- Pacotes mais recentes que RHEL/Rocky/AlmaLinux.
    
- Gratuito e compatível com ferramentas empresariais.
    
- Bom para aprender (já que o RHEL é amplamente usado em empresas).

### Erro # ['xterm-new': unknown terminal type](https://stackoverflow.com/questions/27052587/xterm-new-unknown-terminal-type)
```
# Run the following commands on the local machine's bash prompt
echo "export TERM=xterm-256color" >> ~/.bashrc
source ~/.bashrc
```