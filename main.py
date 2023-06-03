import toml
from pprint import pprint
from jinja2 import Template
from jinja2 import Environment, FileSystemLoader

class Portfolio:
    def __init__(self):
        self.about_toml = "config/about.toml"
        self.projects_toml = "config/projects.toml"
        self.resume_toml = "config/resume.toml"



    def read_file(self, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read() 
        return content


    def write_file(self, file_path, content):
        with open(file_path, 'w', encoding= 'utf-8') as file:
            file.write(content)


    def load_toml_file(self, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            data = toml.loads(content)
        return data


    def about(self):
        return self.load_toml_file(self.about_toml)


    def projects(self):
        return self.load_toml_file(self.projects_toml)


    def categories(self):
        filters = []
        projects = self.projects()
        for projec in projects.values():
            filters.append(projec['category'])
        return set(filters)

    def resume(self):
        toml_cfg = self.load_toml_file(self.resume_toml)
        return toml_cfg


if __name__ == "__main__":

    portfolio = Portfolio()
    about = portfolio.about()
    projects = portfolio.projects()
    categories = portfolio.categories()
    resume = portfolio.resume()
      

    env = Environment(loader=FileSystemLoader('jinja'))

    template = env.get_template('index.jinja')

    html_render = template.render(
        about = about,
        projects = projects,
        categories = categories,
        resume = resume,
        )

    portfolio.write_file("index.html", html_render)