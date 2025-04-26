import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TeamDirectory.css';

const teamMembers = [
  {
    id: 1,
    name: 'Jenny Wilson',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 2,
    name: 'Annette Black',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 4,
    name: 'Sihem Lakhder',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 5,
    name: 'Nadir Larbi',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 6,
    name: 'Ronald Richards',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 7,
    name: 'Eleanor Pena',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 8,
    name: 'Jenny Wilson',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 9,
    name: 'Cody Fisher',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  }
];

function TeamDirectory() {
  const handleLoadMore = () => {
    console.log('Load more team members');
  };

  return (
    <section className="team-directory">
      <div className="container">
        <h2 className="team-directory__title">ESPACE ENTREPRISE</h2>

        <div className="team-directory__grid">
          {teamMembers.map((member) => (
            <Link
              to={`/profile/${member.id}`}
              key={member.id}
              className="team-member-link"
            >
              <div className="team-member">
                <div className="team-member__image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member__image"
                  />
                </div>

                <h3 className="team-member__name">{member.name}</h3>
                <p className="team-member__title">{member.title}</p>
                <p className="team-member__description">{member.description}</p>

                <div className="team-member__social">
                  <a href={member.social.linkedin} className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  <a href={member.social.twitter} className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
                  <a href={member.social.instagram} className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="team-directory__cta">
          <button className="team-directory__load-more" onClick={handleLoadMore}>
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamDirectory;
