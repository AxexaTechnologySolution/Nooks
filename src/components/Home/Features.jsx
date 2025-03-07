import { FaChalkboardTeacher, FaBed, FaUtensils, FaLock, FaBook, FaChair, FaTable,FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";

const Features = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="w-6 h-6" />,
            title: "Class Room",
            desc: "A wide range of single and double desks, writing pad chairs, and teachers' tables to enhance the learning environment.",
            to: "/products/aUEqZwVPPzkOBhQwVt6X"
        },
        {
            icon: <FaBed className="w-6 h-6" />,
            title: "Hostel",
            desc: "Comfortable single and bunk beds, along with study tables, designed to create a pleasant hostel experience.",
            to: "/products/BnychZ587yTyDDXML5Fv"
        },
        {
            icon: <FaUtensils className="w-6 h-6" />,
            title: "Cafeteria & Dining",
            desc: "Modern and durable cafeteria and dining tables and chairs, ideal for communal dining spaces.",
            to: "/products/dIq5eTPF7ENSnrraXXCh"
        },
        {
            icon: <FaLock className="w-6 h-6" />,
            title: "Lockers & Storage",
            desc: "Sturdy Lockers, Cupboards, Cabinets, and Shelves that are practical and aesthetically appealing.",
            to: "/products/upfn830m3iQK3SxfnOii"
        },
        {
            icon: <FaBook className="w-6 h-6" />,
            title: "Library",
            desc: "Functional and aesthetic library furniture, including display racks, magazine racks, tables, and chairs.",
            to: "/products/xE5xuDaaC0dFxomOVFvd"
        },
        {
            icon: <FaChair className="w-6 h-6" />,
            title: "Chair",
            desc: "Discover our stylish and ergonomic office furniture, perfect for creating a productive and comfortable workspace.",
            to: "/office-products/fSDFbabmT71Kc9v9xTU8"
        },
        {
            icon: <FaTable className="w-6 h-6" />,
            title: "Table",
            desc: "Thoughtfully designed workstations that create an enabling work environment by providing the tools to increase productivity, comfort, and satisfaction.",
            to: "/office-products/gEqYLc3KiVKDOVQxKQrZ"
        },
        {
            icon: <FaDesktop className="w-6 h-6" />,
            title: "Workstation",
            desc: "Ergonomic and space-efficient workstations designed to enhance productivity and comfort in office environments.",
            to: "/office-products/hqWERvMnKJHyXo9pLZtY"
        }
    ];
    

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-600 text-3xl font-semibold sm:text-4xl">
                        Explore our range of furniture
                    </h3>
                    <p className="mt-3">
                        At Nooks, we provide a diverse range of solutions for institutional and office environments.
                        Explore our products to find the perfect fit for your needs.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <Link to={item.to} className="block">
                                    <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold underline">
                                        {item.title}
                                    </h4>
                                    <p className="mx-auto text-justify">
                                        {item.desc}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Features;
