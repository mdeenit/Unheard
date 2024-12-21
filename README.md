# Introduction

As an aspiring developer, it is important to be able to communicate and demonstrate your abilities to prospective employers.

A full stack developer needs to be able to demonstrate they can build a complete application from design through to deployment for a commercial client (using appropriate tools and methodologies).

Full Stack App - Part A requires you to deliver the documentation component of this project.

Brief
You are to design a web application (app) built for a real world customer, or design a web application (app) built for a hypothetical customer with a realistic problem. Your project must be approved by your educators before you begin work on it.

Find a business or organisation (preferably near Coder Academy) to build an app for.

Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with an app and present your ideas to the client.

The project must be completed in the assigned groups.


R1	Description of your website, including:
- Purpose
- Functionality / features
- Target audience
- Tech stack 

Purpose:

Unheard is a music discovery platform designed to empower emerging artists and connect them with a wider audienc. The app aims to level the playing field in the music industry by providing independent musicians with the tools and exposure they need to build their careers.

Functionality/Features:

Artist Profiles:

Artists can create comprehensive profiles to showcase their music, biography, photos, social media links, and genre information.

The platform prioritizes high-quality audio uploads and streaming to ensure an optimal listening experience.

Music Discovery:

Users can discover new music through advanced search filters (genre, mood, instruments) and curated playlists.
This feature allows fans to explore a diverse range of artists and find music that resonates with their tastes.

Target Audience:

Emerging Music Artists: Musicians who are seeking to gain exposure, connect with fans, and build a following.
Music Fans: Listeners who are interested in discovering new and independent artists.

Tech Stack:

# Frontend: React with Vite for a fast and responsive user interface.
# Backend: Node.js with Express.js to create a robust API for handling user data, music uploads, and interactions.

# Database: MongoDB for flexible and efficient storage of artist profiles, music metadata, playlists, and user interactions.

R2	Dataflow Diagram

Please refer to - [docs/dfd](docs/dfd)

R3	Application Architecture Diagram

Please refer to - ![docs/appArchitecture](<docs/appArchitecture/Application ArchitectureDiagram.jpeg>)

R4	User Stories

- Go into details about each user stories 
- Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.

Provides multiple user stories that use ‘persona, what and why’ that outline meaningful features of project. Shows evidence of user story revision and refinement.

User Story 1: Artist Profile Creation

*   As an artist, I want to create a detailed profile so that I can showcase my music, bio, photos, and connect with potential fans.

    *   UX/UI Details:
        *   Multi-step form with sections for basic info, bio, photos, and music uploads.
        *   Rich text editor for the bio.
        *   Drag-and-drop functionality for image uploads.
        *   Fields for music metadata (title, album).
        *   Preview mode to see the profile before publishing.
        *   Easy editing tools for updating profile information.

    *   Agile Considerations:
        *   Priority: High (Must-have for MVP)
        *   Iteration 1: Basic profile creation with essential fields.
        *   Iteration 2: Add rich text editor and image upload functionality.
        *   Iteration 3: Implement music upload and metadata input.
        *   Gather feedback from artists after each iteration to refine the form and features.

User Story 2: Music Search and Discovery

*   As a fan, I want to search for music using filters (genre, mood, instrument) so that I can discover new artists and songs that I like.

    *   UX/UI Details:
        *   Prominent search bar on all pages.
        *   Filter options (dropdown menus, checkboxes) for genre, mood, instruments.
        *   Search results page with clear artist/song information and "play" buttons.
        *   Option to add songs to playlists from the search results.

    *   Agile Considerations:
        *   Priority: High (Must-have for MVP)
        *   Iteration 1: Basic search functionality with genre filter.
        *   Iteration 2: Add mood and instrument filters.
        *   Iteration 3: Implement "Surprise Me" feature and refine search result display.
        *   Gather feedback from users on search effectiveness and filter options.

User Story 3: Playlist Creation and Management

*   As a fan, I want to create playlists of my favorite songs so that I can easily listen to them again later.

    *   UX/UI Details:
        *   "Add to Playlist" button on song pages and search results.
        *   Dedicated page for managing playlists (CREATE, READ, UPDATE and DELETE).
        *   Option to share playlists with other users.

    *   Agile Considerations:
        *   Priority: Medium (Should-have for MVP)
        *   Iteration 2: Basic playlist creation and adding songs.
        *   Iteration 3: Implement playlist editing and deletion.
        *   Iteration 4: Add playlist sharing functionality.
        *   Gather feedback on playlist usability and features.

User Story 4: High-Quality Music Uploads

*   As an artist, I want to upload my music in high quality so that listeners can enjoy the best possible audio experience.

    *   UX/UI Details:
        *   Support for lossless audio formats (FLAC, WAV).
        *   Clear upload progress indicators.
        *   Options for artists to select audio quality levels.

    *   Agile Considerations:
        *   Priority: Medium (Should-have, but can be refined later)
        *   Iteration 3: Basic high-quality upload with progress indicators.
        *   Iteration 4: Add support for more audio formats and quality settings.
        *   Monitor audio quality and performance based on user feedback.

User Story 5: Clear Artist and Music Information

*   As a fan, I want to see clear information about the artists and their music (genre, release date, etc.) so that I can make informed choices about what to listen to.

    *   UX/UI Details:
        *   Artist profiles display key information prominently (genre, location, bio).
        *   Music metadata (title, album, release date, genre) shown with each song.
        *   "About the Artist" section for more detailed information.

    *   Agile Considerations:
        *   Priority: High (Must-have for MVP)
        *   Iteration 1: Include essential artist and music information on relevant pages.
        *   Iteration 2: Add "About the Artist" section to profiles.
        *   Refine information display based on user feedback and usability testing.

R5	Wireframes for multiple standard screen sizes, created using industry standard software

Please refer to - [docs/wireframe](docs/wireframe)

R6	Screenshots of your Trello (or similar kanban system) board throughout the duration of the project

Please refer to - [docs/trello ](docs/trello)

