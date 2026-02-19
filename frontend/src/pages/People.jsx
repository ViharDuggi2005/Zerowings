import "./People.css";

export default function People() {
  const team = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      type: "founder",
      position: "pos-1",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Co-Founder & CTO",
      type: "founder",
      position: "pos-2",
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Avionics",
      type: "member",
      position: "pos-3",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Software",
      type: "member",
      position: "pos-4",
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Mechanical",
      type: "member",
      position: "pos-5",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Electrical",
      type: "member",
      position: "pos-6",
    },
  ];

  return (
    <div className="people-page">
      <header className="people-header">
        <h1>
          Meet Our <span className="teal-text">Team</span>
        </h1>
        <p>Pushing the boundaries of aerospace innovation.</p>
      </header>

      <div className="canvas-container">
        {/* Background Curves */}
        <svg
          className="bg-curves"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50,200 Q400,100 600,400 T1100,500"
            stroke="#008080"
            strokeWidth="60"
            strokeLinecap="round"
            opacity="0.15"
          />
          <path
            d="M1050,600 Q700,800 400,600 T-100,750"
            stroke="#008080"
            strokeWidth="80"
            strokeLinecap="round"
            opacity="0.1"
          />
        </svg>

        <div className="people-floating-grid">
          {team.map((person) => (
            <div
              key={person.id}
              className={`person-card ${person.position} ${person.type}`}
            >
              <div className="image-box">
                {/* Placeholder for images - matches the reference's teal backgrounds */}
                <div className="teal-placeholder"></div>
              </div>
              <div className="person-info">
                <h3>{person.name}</h3>
                <span>{person.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
