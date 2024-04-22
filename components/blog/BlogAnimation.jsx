"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../../components/contact/Contact";
import { blogPosts } from "@/data/blogs";
import Image from "next/image";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalItem, setCurrentModalItem] = useState(blogPosts[0]);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row">
        {blogPosts.map((elm, i) => (
          <div
            key={i}
            className="col-lg-4 col-md-6 my-3"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div
              className="blog-post"
              onClick={() => {
                setCurrentModalItem(elm);
                toggleModalOne();
              }}
            >
              <div className="blog-img">
                <div className="data">
                  <span>{elm.day}</span>
                  <small>{elm.month}</small>
                </div>

                <Image
                  width={991}
                  height={661}
                  style={{ height: "fit-content" }}
                  src={elm.imgSrc}
                  alt="blog post"
                />
              </div>
              {/* End blog-img */}

              <div className="blog-info">
                <h6>{elm.title}</h6>
                <p>{elm.content}</p>
                <div className="btn-bar">Read More</div>
              </div>
              {/* End blog-info */}
            </div>
            {/* End blog-post */}
          </div>
        ))}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={512}
              height={512}
              src="/img/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <Image
                    width={992}
                    height={661}
                    style={{ height: "fit-content" }}
                    src={currentModalItem.imgSrc}
                    alt="blog post"
                  />
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>{currentModalItem.title}</h2>
                    <div className="media">
                      <div className="avatar">
                        <Image
                          width={638}
                          height={690}
                          style={{ height: "fit-content" }}
                          src="/img/testimonial/team-1.jpg"
                          alt="thumbnail"
                        />
                      </div>
                      <div className="media-body">
                        <label>BY ALEX</label>
                        <span>
                          {currentModalItem.day} {currentModalItem.month} 2020
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}
    </>
  );
};

export default Blog;
