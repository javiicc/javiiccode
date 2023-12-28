import "./InfoCard.css";
import Image from "next/image";

const InfoCard = ({
  startDate,
  endDate,
  position,
  institution,
  institutionPath,
  dateText,
  place,
  logoPath,
}: {
  startDate: any;
  endDate: any;
  position: string;
  institution: string;
  institutionPath: string;
  dateText: any;
  place: string;
  logoPath: string;
}) => {
  function yearsDiff(d1: any, d2: any) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  function monthsDiff(d1: any, d2: any) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let years = yearsDiff(d1, d2);
    let months = years * 12 + (date2.getMonth() - date1.getMonth());
    return months;
  }
  function workingTime(d1: any, d2: any) {
    const months = monthsDiff(d1, d2);
    const monthsInYears = months / 12;
    const years = Math.floor(monthsInYears);
    const mos = months - years * 12;
    return mos === 0 ? `${years} yr` : `${years} yr ${mos} mos`;
  }
  const wT = workingTime(startDate, endDate);

  return (
    <div className="info-card-container">
      <div className="ghd-card">
        <div className="ghd-logo">
          <Image
            src={logoPath}
            width={500}
            height={500}
            alt="Ghenova Digital's logo"
            className=""
          />
        </div>
        <div className="ghd-data">
          <div className="ghd-data_A">
            <p className="ghd-data__1">{position}</p>
            <a href={institutionPath} target={"_blank"} className="ghd-data__2">
              {institution}
            </a>
          </div>
          <div className="ghd-data_B">
            <p className="ghd-data__3">
              {dateText} -&gt; {wT}
            </p>
            <p className="ghd-data__4">{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
