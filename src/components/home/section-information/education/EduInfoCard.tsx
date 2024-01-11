import Image from "next/image";

const ExpInfoCard = ({
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
    <div className="w-[100%] max-w-[630px]">
      <div className="flex md:flex-row flex-col items-center">
        <div className="md:p-5 pt-5 px-5 pb-0 max-h-[220px] max-w-[220px] md:max-h-[200px] md:max-w-[200px] md:w-fit w-[100%]">
          <Image
            src={logoPath}
            width={350}
            height={350}
            alt="Ghenova Digital's logo"
            className="rounded-xl"
          />
        </div>
        <div className="w-[100%] min-h-[200px] py-5 px-5 flex flex-col justify-between">
          <div className="h-[50%]">
            <p className="font-semibold text-lg">{position}</p>
            <a
              href={institutionPath}
              target={"_blank"}
              className="font-semibold text-[rgba(184,134,11,0.8)] hover:text-[#4dbdfd]"
            >
              {institution}
            </a>
          </div>
          <div className="h-[50%]">
            <p className="text-[rgba(124,165,42,0.8)]">
              {dateText}
              <br></br>-&gt; {wT}
            </p>
            <p className="italic text-gray-600">{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpInfoCard;
