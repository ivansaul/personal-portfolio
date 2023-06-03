import toml
from pprint import pprint
from jinja2 import Template
from datetime import datetime
from jinja2 import Environment, FileSystemLoader

class Portfolio:
    def __init__(self):
        self.about_toml = "config/about.toml"
        self.projects_toml = "config/projects.toml"
        self.resume_toml = "config/resume.toml"
        self.blog_toml = "config/blog.toml"




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


    def format_date(self, date: str):
        date_object = datetime.strptime(date, "%Y-%m-%d")
        formatted_date = date_object.strftime("%b %d, %Y")
        return formatted_date


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

    def blog(self):
        return self.load_toml_file(self.blog_toml)


if __name__ == "__main__":

    portfolio = Portfolio()
    about = portfolio.about()
    projects = portfolio.projects()
    categories = portfolio.categories()
    resume = portfolio.resume()
    blog = portfolio.blog()
      

    env = Environment(loader=FileSystemLoader('jinja'))
    env.filters['format_date'] = portfolio.format_date

    template = env.get_template('index.jinja')

    html_render = template.render(
        about = about,
        projects = projects,
        categories = categories,
        resume = resume,
        blog = blog,
        )

    portfolio.write_file("index.html", html_render)