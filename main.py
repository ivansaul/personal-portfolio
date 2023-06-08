import toml
from pprint import pprint
from jinja2 import Template
from datetime import datetime
from jinja2 import Environment, FileSystemLoader

class Portfolio:
    def __init__(self):
        self.about_toml = "config/about.toml"
        self.social_toml = "config/social.toml"
        self.doing_toml = "config/doing.toml"
        self.softskills_toml = "config/softskills.toml"
        self.technologies_toml = "config/technologies.toml"
        self.resume_toml = "config/resume.toml"
        self.projects_toml = "config/projects.toml"
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

    def social(self):
        return self.load_toml_file(self.social_toml)
    
    def doing(self):
        return self.load_toml_file(self.doing_toml)['doing']
    
    def softskills(self):
        return self.load_toml_file(self.softskills_toml)
    
    def technologies(self):
        data = self.load_toml_file(self.technologies_toml)
        return data
    
    def resume(self):
        toml_cfg = self.load_toml_file(self.resume_toml)
        return toml_cfg
    
    def projects(self):
        return self.load_toml_file(self.projects_toml)

    def blog(self):
        return self.load_toml_file(self.blog_toml)
    
    def categories(self):
        filters = []
        projects = self.projects()
        for projec in projects.values():
            filters.append(projec['category'])
        return set(filters)


if __name__ == "__main__":

    portfolio = Portfolio()
    about = portfolio.about()
    doing = portfolio.doing()
    social = portfolio.social()
    softskills = portfolio.softskills()
    technologies = portfolio.technologies()
    resume = portfolio.resume()
    projects = portfolio.projects()
    blog = portfolio.blog()
    categories = portfolio.categories()
      

    env = Environment(loader=FileSystemLoader('jinja'))
    env.filters['format_date'] = portfolio.format_date

    template = env.get_template('index.jinja')

    html_render = template.render(
        about = about,
        social = social,
        doing = doing,
        softskills = softskills,
        technologies = technologies,
        resume = resume,
        projects = projects,
        blog = blog,
        categories = categories,
        )

    portfolio.write_file("index.html", html_render)