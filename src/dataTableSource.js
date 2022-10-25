import moment from "moment";
// / USERS
export const userColumns = [
      { field: "id", headerName: "ID", width: 70 },
      {
            field: "user",
            headerName: "User",
            width: 180,
            renderCell: (params) => {
                  return (
                        <div className="cellWidthImg">
                              <img className="cellImg"
                                    src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                                    alt="avatar"
                              />
                              {params.row.username}
                        </div>
                  );
            },
      },
      {
            field: "fullname",
            headerName: "Full Name",
            width: 170,
            renderCell: (params) => {
                  return (
                        <div className="cellName">
                              {params.row.firstname}
                              {" "}
                              {params.row.lastname}
                        </div>
                  );
            },
      },
      {
            field: "email",
            headerName: "Email",
            width: 230,
      },
      {
            field: "address",
            headerName: "Address",
            width: 180,
      },
      {
            field: "city",
            headerName: "City",
            width: 100,
      },
    

];

//PRODUCTS
export const productColumns = [
      { field: "id", headerName: "ID", width: 70 },
      {
            field: "product",
            headerName: "Product",
            width: 290,
            renderCell: (params) => {
                  return (
                        <div className="cellWidthImg">
                              <img className="cellImg"
                                    src={params.row.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                                    alt=""
                              />
                              {params.row.title}
                        </div>
                  );
            },
      },
      {
            field: "categories",
            headerName: "Categories",
            width: 160,
      },
      {
            field: "size",
            headerName: "Sizes",
            width: 80,
      },
      {
            field: "brand",
            headerName: "Brand",
            width: 120,
      },
      {
            field: "price",
            headerName: "Price",
            width: 100,
            renderCell: (params) => {
                  return (
                        <div className="cellName">
                              {params.row.price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                        </div>
                  );
            },
      },
      {
            field: "inStock",
            headerName: "inStock",
            width: 100,
      },

];


//ORDERS
export const orderColumns = [
      { field: "id", headerName: "ID", width: 20 },
      {
            field: "createdAt",
            headerName: "Date",
            width: 160,
            renderCell: (params) => {
                  return (
                        <div className="cellName">
                              {moment(params.row.createdAt).format('DD / MM / YYYY')}
                        </div>
                  );
            },
      },
      {
            field: "userId",
            headerName: "User ID",
            width: 230,
            renderCell: (params) => {
                  return (
                        <div className="cellName">
                              {params.row.userId}
                        </div>
                  );
            },
      },
      {
            field: "amount",
            headerName: "Amount",
            width: 160,
            renderCell: (params) => {
                  return (
                        <div className="cellName">
                              {params.row.amount?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                        </div>
                  );
            },
      },
      {
            field: "address",
            headerName: "Address",
            width: 120,
      },
      {
            field: "paymentMethod",
            headerName: "Payment Method",
            width: 140,
            renderCell: (params) => {
                  return (
                        <div className={`paymentMethod ${params.row.paymentMethod}`}>
                              {params.row.paymentMethod}
                        </div>
                  );
            },
      },
      {
            field: "status",
            headerName: "Status",
            width: 100,
            renderCell: (params) => {
                  return (
                        <div className={`status ${params.row.status}`}>
                              {params.row.status}
                        </div>
                  );
            },
      },

];


