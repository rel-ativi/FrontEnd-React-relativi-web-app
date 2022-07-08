

const Card = ({name, category}) => {
    <div  className="item-container">
        <div>
            <span className="item-label">Name:</span>
                {name}
        </div>
        <div>
            <span className="item-label">Category:</span>
                {category}
        </div>
    </div>
}

export default Card; 