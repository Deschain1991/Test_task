import React from "react";
import "./Add-product-modal.scss"
import { connect } from "react-redux";
import {updateName,updateImage,updateCount,updateWeight,updateWidth,
        updateHeight,addCommentAction,addProductAction} from "../../store/actions/products.actions"


const AddProductModal = (props) => {

    const submitAction = () => {
        props.addNewProduct()
        props.setActive(false)
    }

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className="modal-style">
                    <div>
                        <div>Name</div>
                        <input onChange={(event) => props.enterName(event.currentTarget.value)}
                            value={props.newName} />
                    </div>
                    <div>
                        <div>Image</div>
                        <input onChange={(event) => props.enterImage(event.currentTarget.value)}
                            value = {props.newImage}/>
                    </div>
                    <div>
                        <div>Count</div>
                        <input onChange={(event) => props.enterCount(event.currentTarget.value)}
                            value = {props.newCount}/>
                     </div>
                    <div>
                        <div>Weight</div>
                        <input onChange={(event) => props.enterWeight(event.currentTarget.value)}
                            value = {props.newWeight}/>
                    </div>
                    <div>
                        <div>Width</div>
                        <input onChange={(event) => props.enterWidth(event.currentTarget.value)}
                            value = {props.newWidth}/>
                    </div>
                    <div>
                        <div>Height</div>
                        <input onChange={(event) => props.enterHeight(event.currentTarget.value)}
                            value = {props.newHeight}/>
                    </div>
                    <div>
                        <div>Comments</div>
                        <input onChange={(event) => props.enterComment(event.currentTarget.value)}
                            value = {props.newComment}/>
                    </div>
                </div>
                <button  onClick={() => props.setActive(false)}>Cancel</button>
                <button onClick={() => submitAction()}>Add product</button>
            </div>
        </div>
    )

}


const mapStateToProps = (state) => ({
    newName: state.products.name,
    newImage: state.products.image,
    newCount: state.products.count,
    newWeight: state.products.weight,
    newWidth: state.products.width,
    newHeight: state.products.height,
    newComment: state.products.comments,
});

const mapDispatchToProps = {
    enterName: updateName,
    enterImage: updateImage,
    enterCount: updateCount,
    enterWeight: updateWeight,
    enterWidth: updateWidth,
    enterHeight: updateHeight,
    enterComment: addCommentAction,
    addNewProduct: addProductAction
}



export default connect(mapStateToProps, mapDispatchToProps) (AddProductModal);