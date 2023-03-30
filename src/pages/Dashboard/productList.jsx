import DashTable from '../../components/Table/dashTable';
import useLoaderData from '../../hooks/useLoadData';

export default function DashProductList() {
     const { status, data } = useLoaderData("all");

     return (
          <DashTable data={data} />
     )
}