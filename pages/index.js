import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/** Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/Foto.jpg" alt="tati" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1> Tatiana Espinelli </h1>
              <h3>FrontEnd Developer</h3>
              <p>
                Hello World! <br />
                My name is Tatiana Espinelli. I'm from Uruguay, spanish is my
                native language and I speak fluent english. <br />
                I love music, art, I'm a dancer and I love programming. I'm
                looking for my first job in this area and i'm very excited to
                finally make it and start working with amazing people and doing
                some great things! <br />
                I'm a person that loves studing and learn new things every day,
                I'm never get tired of the process, I just love that we always
                can get better and keep growing. <br />
                I'm an organized person, I like working with timelines and set
                goals to get things done. <br />I love eating, drink coffee, go
                to the theater, travel and read a good book. But most of all, I
                love spending time with my loved
              </p>
              <a
                href="https://www.linkedin.com/in/tatiana-espinelli/"
                target="blank"
              >
                <i class="bi bi-linkedin"></i>{" "}
              </a>
              <a href="https://github.com/TatiEspinelli" target="blank">
                <i class="bi bi-github"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1> Skills </h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5> {skill} </h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1> Experience </h1>

            <ul>
              {experiences.map(({ title, description, pagina }, index) => (
                <li key={index}>
                  <h3> {title} </h3>
                  <p> {description} </p>
                  <p> {pagina} </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light"> Tati's Portfolio </h1>
            </div>

            {projects.map(({ name, description, image, page }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" />
                  </div>

                  <div className="card-body">
                    <h3> {name} </h3>
                    <p> {description} </p>
                    <p> {page} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
