import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';
import { setChapter } from '../../actions/bookActions';

const Content = (props) => {
    let listOfChapters = [];
    const setChapter = (e) => {
        props.setChapter(e.currentTarget.id);
    };
    props.book.chapters.forEach((chapter, index) => {
        listOfChapters.push(<div key={index} className="chapterBox">
            <Link style={{
                color: "inherit",
                textDecoration: "none"
            }} to={{
                pathname: "/poems"
            }} onClick={setChapter} className="text" id={index}>{chapter.title}</Link>
        </div>)
    })
    return (
        <div className="listChapters" >
            {listOfChapters}
        </div>
    )
}
const mapStateToProps = state => ({
    book: state.books.book
});
export default connect(mapStateToProps, { setChapter })(Content);