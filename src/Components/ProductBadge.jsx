const ProductBadge = ({badge}) => {

    if(badge ==="choice"){
        return(
            <span className="text-xs xl:text-sm font-bold bg-slate-800 text-white p-1">Littlepaw's 
            <span className="text-orange-500 font-bold"> Choice</span></span>
        )
    }
    else if(badge==="seller"){
        return(
            <span className="text-xs xl:text-sm bg-orange-500 font-bold text-white p-1">#1 Best Seller</span>
        )
    }
    else if(badge==="limited"){
        return(
            <span className="text-xs xl:text-sm bg-red-800 font-bold text-white p-1">Limited Time Deal</span>
        )
    }


  return (
    <div>
    </div>
  )
}

export default ProductBadge
