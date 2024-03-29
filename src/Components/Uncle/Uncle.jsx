import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin asset={asset} name={'Rafsan'} />
        <Cousin name={'KK'} />
      </section>
    </div>
  );
};

export default Uncle;