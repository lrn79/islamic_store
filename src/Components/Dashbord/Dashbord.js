
import AreaChirte from './areaChart/AreaChart';
import Barchirt from './barchart/Barchirt';
import LineCharte from './lineChart/LineChart';

const Dashbord = () => {
    // const [chirt, setChirt] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then((res) => res.json())
    //         .then((data) => setChirt(data))

    // }, [])
    return (
        <div>
            <LineCharte></LineCharte>
            <AreaChirte></AreaChirte>

        </div>
    );
};

export default Dashbord;