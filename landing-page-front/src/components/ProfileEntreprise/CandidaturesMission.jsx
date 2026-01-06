import "./CandidaturesMission.css";
import avatar from "../../assets/Assistant relation.jpeg";
import schoolLogo from "../../assets/icon.png";
import acceptIcon from "../../assets/accept.png";
import refuseIcon from "../../assets/refus.png";

const candidats = [
  {
    id: 1,
    name: "Bessie Cooper",
    formation: "Licence informatique",
    age: 22,
    nationalite: "Brésilienne",
    langues: "Espagnol (natif), Français (B2), Anglais (C1)",
    ecole: "Université Sorbonne",
    date: "11 DEC 2024",
  },
  {
    id: 2,
    name: "John Fav",
    formation: "Licence Big Data",
    age: 23,
    nationalite: "Chinois",
    langues: "Chinois (natif), Français (B2), Anglais (C1)",
    ecole: "Université Paris 13",
    date: "10 DEC 2024",
  },
];

function CandidaturesMission() {
  return (
    <div className="candidatures-mission">
      {candidats.map((candidat) => (
        <div key={candidat.id} className="candidat-row">

          {/* PHOTO */}
          <img
            src={avatar}
            alt={candidat.name}
            className="candidat-avatar"
          />

          {/* INFOS + ACTIONS */}
          <div className="candidat-info">

            <h4 className="candidat-name">{candidat.name}</h4>

            <p className="candidat-formation">{candidat.formation}</p>

            <p><strong>Âge :</strong> {candidat.age} ans</p>
            <p><strong>Nationalité :</strong> {candidat.nationalite}</p>
            <p><strong>Langues :</strong> {candidat.langues}</p>

            {/* FOOTER ÉCOLE */}
            <div className="candidat-footer">
              <img
                src={schoolLogo}
                alt={candidat.ecole}
                className="school-logo"
              />
              <div className="school-info">
                <span className="school-name">{candidat.ecole}</span>
                <span className="candidat-date">{candidat.date}</span>
              </div>
            </div>

            {/* ACTIONS EN BAS */}
            <div className="candidat-actions">
  <img
    src={acceptIcon}
    alt="Accepter"
    className="action-icon accept"
  />
  <img
    src={refuseIcon}
    alt="Refuser"
    className="action-icon refuse"
  />
</div>


          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidaturesMission;
