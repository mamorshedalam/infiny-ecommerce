import DashTable from '../../components/Table/dashTable';
import useLoadData from '../../hooks/useLoadData';
import LoadingMessage from '../../components/Spinner/loadingMessage'

export default function DashProductList() {
     const { status, data } = useLoadData();

     return (
          <>
               {status.error && <p className="text-center">There wsa an error!</p>}
               {!status.loading && data === null && <p className="text-center">No data found</p>}
               {status.loading && <LoadingMessage text="Product" />}
               <DashTable data={data} />
          </>
     )
}