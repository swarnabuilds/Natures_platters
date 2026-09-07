import product from '../../assets/img/products.png'
import ServiceImage from '../../assets/img/service.png'
import delivery from '../../assets/img/delivery.png'

const Services = () => {
    return (
 <div className="my-[80px] container mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#179800]">Our Services</h2>

      <div className="grid grid-cols-3 gap-4  py-8 ">
        <div className="rounded-md shadow-2xl p-5">
          <img src={ServiceImage} alt="" className="mx-auto mt-3" />
          <h2 className="text-3xl font-bold text-center my-3">
            24/7<span className="text-[#179800]">Services</span>
          </h2>
          <p className="text-center md:w-10/12 md:mx-auto mb-5">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
        <div className="rounded-md shadow-2xl p-5">
          <img src={delivery} alt="" className="mx-auto mt-3" />
          <h2 className="text-3xl font-bold text-center my-3">
            Fast <span className="text-[#179800]">Delivery</span>
          </h2>
          <p className="text-center md:w-10/12 md:mx-auto mb-5">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
        <div className="rounded-md shadow-2xl p-5">
          <img src={product} alt="" className="mx-auto mt-3" />
          <h2 className="text-3xl font-bold text-center my-3">
            Healthy <span className="text-[#179800]">Products</span>
          </h2>
          <p className="text-center md:w-10/12 md:mx-auto mb-5">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
      </div>
    </div>
    );
};

export default Services;