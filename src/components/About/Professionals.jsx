import { InstagramIcon } from "../../assets/icons/icons";
import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchWorkersAsync } from "../../features/workers/workerSlice";
import {
  formatDate,
  formatPhoneNumber,
} from "../../features/workers/workerSlice";

const payload = [
  {
    id: 10,
    first_name: "Gisely",
    last_name: "Rosa",
    job: "Proprietaria e Hairstylist",
    instagram: "giselyr",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fgisely.jpeg?alt=media\u0026token=0ac4b8e2-5ea2-452e-b61c-554b22dbae1d",
    description: "Dondoca",
    phone_number: 11974000738,
    createdAt: "2023-05-03T18:07:08.255-03:00",
    updatedAt: "2023-05-03T18:07:08.255-03:00",
    categories: [],
  },
  {
    id: 11,
    first_name: "Juarezita",
    last_name: "Rosa",
    job: "Proprietaria, Manicure/Pedicure e Sobrancelha",
    instagram: "juarezita_rosa",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fjuarezita.jpeg?alt=media\u0026token=abbfe054-86cc-4543-a7c0-a50be8f5ee53",
    description: "Dondoca",
    phone_number: 11971190391,
    createdAt: "2023-05-03T18:07:08.259-03:00",
    updatedAt: "2023-05-03T18:07:08.259-03:00",
    categories: [],
  },
  {
    id: 12,
    first_name: "Silvia",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: "silvianaildesigner7",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fsilvia.jpeg?alt=media\u0026token=8c187b3b-f77c-4140-bdb5-76be4fbd85c1",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.262-03:00",
    updatedAt: "2023-05-03T18:07:08.262-03:00",
    categories: [],
  },
  {
    id: 13,
    first_name: "Elisangela",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: null,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Felisangela.jpeg?alt=media\u0026token=1f5eea51-2c08-4c75-85bf-8951a07b30f0",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.264-03:00",
    updatedAt: "2023-05-03T18:07:08.264-03:00",
    categories: [],
  },
  {
    id: 14,
    first_name: "Josiane",
    last_name: null,
    job: "Secretária",
    instagram: null,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fjosi.jpeg?alt=media\u0026token=baa99954-3509-48bb-b3ba-5f3dc687a88d",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.266-03:00",
    updatedAt: "2023-05-03T18:07:08.266-03:00",
    categories: [],
  },
  {
    id: 15,
    first_name: "Luciana",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: "lucianamonteiro6148",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fluciana.jpeg?alt=media\u0026token=60ce99c0-5c18-459a-b00d-42e042535746",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.269-03:00",
    updatedAt: "2023-05-03T18:07:08.269-03:00",
    categories: [],
  },
  {
    id: 16,
    first_name: "Marcela",
    last_name: null,
    job: "Estética",
    instagram: "marcelasantos_esteticista",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fmarcela.jpeg?alt=media\u0026token=935785ae-ffd3-4264-9328-02cdc04a845b",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.271-03:00",
    updatedAt: "2023-05-03T18:07:08.271-03:00",
    categories: [],
  },
  {
    id: 17,
    first_name: "Midiã",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: "miicarvalho.20",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fmidia.jpeg?alt=media\u0026token=4d23c220-b5ff-4964-b9ee-8bd92cb4571d",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.273-03:00",
    updatedAt: "2023-05-03T18:07:08.273-03:00",
    categories: [],
  },
  {
    id: 18,
    first_name: "Sandra",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: null,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fsandra.jpeg?alt=media\u0026token=c56d9531-9b37-450c-b6a1-c9e73abe0827",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.276-03:00",
    updatedAt: "2023-05-03T18:07:08.276-03:00",
    categories: [],
  },
  {
    id: 19,
    first_name: "Daniela",
    last_name: null,
    job: "Manicure/Pedicure",
    instagram: null,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/dondoca-a6bd8.appspot.com/o/profile_images%2Fdaniela.jpeg?alt=media\u0026token=6fff85a6-f1d3-49c5-8a4f-71cae0059f84",
    description: "Dondoca",
    phone_number: null,
    createdAt: "2023-05-03T18:07:08.278-03:00",
    updatedAt: "2023-05-03T18:07:08.278-03:00",
    categories: [],
  },
];

const workers = payload.map((worker) => {
  return {
    id: worker.id,
    firstName: worker.first_name,
    lastName: worker.last_name,
    phoneNumber: formatPhoneNumber(worker.phone_number?.toString()),
    job: worker.job,
    instagram: worker.instagram,
    createdAt: formatDate(worker.created_at),
    imageUrl: worker.image_url,
    categories: worker.categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    }),
  };
});

function Professionals({ t }) {
  // const dispatch = useDispatch();
  // const { workers } = useSelector((store) => store.workers);

  // useEffect(() => {
  //   dispatch(fetchWorkersAsync());
  // }, [dispatch]);

  return (
    <div className="py-20 px-10 bg-white shadow-lg rounded-xl flex flex-col gap-20">
      {/* title div -- */}
      <div className="flex flex-col items-center text-center relative self-center">
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          {t("aboutUs.team.title")}
        </p>
        <img
          src={TitleBg}
          alt="text_bg"
          className="w-[21rem] relative -top-[55px] -mb-10"
        />

        <h2 className="text-[3.4rem] font-bold mb-4 min620:text-[2.5rem]">
          {t("aboutUs.team.subtitle")}
        </h2>
        <p className="text-[#646464] font-medium text-[15px] max-w-[900px] ">
          {t("aboutUs.team.description")}
        </p>
      </div>

      {/* professionals div -- */}
      <div className="grid grid-cols-3 min800:grid-cols-2 justify-between gap-x-[5%] gap-y-10">
        {workers.map((professional) => (
          <div
            key={professional.id}
            className="flex flex-col justify-center text-white overflow-hidden rounded-2xl shadow-xl"
          >
            {/* professional img */}
            <img
              src={professional.imageUrl}
              alt="professional"
              style={{ transition: "all 0.3s" }}
              className={`object-cover self-center hover:contrast-150`}
            />
            {/* professional description */}
            <div className="flex flex-col gap-2 items-center justify-center bg-gray text-center px-5 border-b-4 border-primary h-[16rem]">
              <h3 className="font-bold text-[2.4rem] ">
                {professional.firstName}
              </h3>
              <p className="font-medium text-[1.5rem]">{professional.job}</p>
              {professional.instagram !== null && (
                <a
                  href={`https://www.instagram.com/${professional.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center mt-5 text-[1.6rem]"
                >
                  <InstagramIcon className="h-6" />
                  <span className="text-sm pl-1">Instagram</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professionals;
