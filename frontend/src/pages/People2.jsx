import "./People2.css";

export default function People2() {
  const team = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      position: "main",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Co-Founder & CTO",
      position: "top-left",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Avionics",
      position: "top-right",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Software",
      position: "bottom-right",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Mechanical",
      position: "bottom-left",
      image:
        "https://images.unsplash.com/photo-1500495046553-aa137b2b2f9d?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="people2-page">
      <header className="people2-header">
        <h1>
          Meet Our <span className="teal-text">Team</span>
        </h1>
        <p>Pushing the boundaries of aerospace innovation.</p>
      </header>

      <div className="people2-container">
        {/* Decorative dots */}
        <div className="dots-cluster left-cluster">
          {[...Array(9)].map((_, i) => (
            <div key={`dot-left-${i}`} className="dot"></div>
          ))}
        </div>

        <div className="dots-cluster right-cluster">
          {[...Array(3)].map((_, i) => (
            <div key={`dot-right-${i}`} className="dot"></div>
          ))}
        </div>

        {/* People cards */}
        <div className="people2-grid">
          {team.map((person) => (
            <div key={person.id} className={`person-circle ${person.position}`}>
              <div className="circle-background"></div>
              <div className="circle-stroke"></div>
              <div className="circle-content">
                <img
                  src={person.image}
                  alt={person.name}
                  className="person-image"
                />
              </div>
              <div className="person-details">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
