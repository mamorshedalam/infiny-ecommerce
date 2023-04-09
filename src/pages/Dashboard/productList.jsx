import DashTable from '../../components/Table/dashTable';
import useLoadData from '../../hooks/useLoadData';

export default function DashProductList() {
     const { status, data } = useLoadData();

     return (
          <>
               {status.error && <p className="center">There wsa an error!</p>}
               {!status.loading && data.length === 0 && <p className="center">No data found</p>}
               {status.loading && <p className="center">Loading...</p>}
               <DashTable data={data} />
          </>
     )
}