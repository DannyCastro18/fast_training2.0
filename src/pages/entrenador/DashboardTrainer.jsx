import NavbarTrainer from '../../components/NavbarTrainer';
import HeaderApp from '../../components/HeaderApp'

function DashboardTrainer() {
    return (
        <div className="flex p-3 w-screen h-screen">
            <NavbarTrainer />
            <div className=" w-full h-full flex flex-col">
                <HeaderApp />
                <section className="w-full h-[90vh] rounded-md bg-white ">
                    
                </section>
            </div>
        </div>
    )
}

export default DashboardTrainer;