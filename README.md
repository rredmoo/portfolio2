# Portfolio Website (dadamov.info and its subdomains)

[Documentation](https://wiki.dadamov.info/Portfolio "wiki.dadamov.info").

This project is my personal portfolio website. It is used to showcase my projects and document my work. The site is designed to be simple, but still use many full-stack project like features.

The project itself is divided into 3 pieces:

- Public View ( Portfolio itself, showcasing featured projects, skills etc.)
- Admin View ( Showcasing admin pages, including CRUD functions for various data models, servers dashboard for CPU usage, memory etc, Mailer API and so on )
- Wiki ( Self hosted documentation sector )

<img width="1276" height="680" alt="Screenshot 2026-02-19 at 11 32 59" src="https://github.com/user-attachments/assets/2777a28f-5604-48f3-880d-2dde96bf1a7d" />
<img width="1284" height="658" alt="Screenshot 2026-02-19 at 11 31 37" src="https://github.com/user-attachments/assets/cc222839-d96e-4c39-b71f-f6cb3f4d663b" />

The application runs as multiple Docker containers:
<img width="2406" height="1514" alt="image" src="https://github.com/user-attachments/assets/4c5f56e5-f13f-4b09-b198-4953e69418a6" />

# Tech stack
>**Frontend**
>React (TypeScript),
>Styled Components,
>Apollo (Calling GraphQL),
>React Three Fiber (3D components),
>Nginx
>
>**Backend**
>Laravel,
>GraphQL using Lighthouse,
>REST API,
>Redis
>
>**Infrastructure**
>Docker,
>MySQL 8.something,
>Linux VPS Server,
>GitHub Actions for workflow automation
>
>**Project Managment**
>Trello kanban board running 1 week sprints
>

Looking at this tech stack, one may get a question - Why both? Why GraphQL and REST API for a simple portfolio? Well... This portfolio includes all CRUD functions, so while creating Projects and Skills Models, Images need to be uploaded. When reading the official GraphQL docs, its even stated, that GraphQL was not designed with file uploads in mind, and that it can introduce security and reliability risks. Of course there are workarounds (plugins for GraphQL, like "Scalar Upload"), but why? Why not use the good old REST API for Model creation linked with file uploads, and keep GraphQL for showcasing and deleting Models.
# User Cases
Well, as stated previously, the project itself is divided into 3 pieces that are managed by 2 user groups, one being the basic public user and the other being the admin. Both groups have the ability to view the public pages of the portfolio as well as the wiki. When it comes to the admin, he has the ability to apply different CRUD functions to Projects and Skills models. Not only that, but also the ability to see live server stats of the main VPS running all the docker containers.
<img width="1360" height="1040" alt="image" src="https://github.com/user-attachments/assets/138ffb13-0b21-4dbc-bc38-de1dffd79dc9" />
