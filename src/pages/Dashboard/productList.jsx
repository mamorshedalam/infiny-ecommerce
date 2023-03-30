import DashTable from '../../components/Table/dashTable';
import useLoadData from '../../hooks/useLoadData';

export default function DashProductList() {
     const { status, data } = useLoadData("all");

     return (
          <DashTable data={data} />
     )
}