import React from 'react'

const ProductModal = ({ itemDetails }) => {
    console.log(itemDetails)
    return (
        <div> <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        <img src={itemDetails?.picture} alt="" />
                        <h1>{itemDetails.name}</h1>
                    </div>
                </div>
            </div></div>
    )
}

export default ProductModal