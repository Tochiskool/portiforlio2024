import React from "react";
import Feature2 from "./Feature2";
import "./style.css";

const Features = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-1-3 remove-gutter-xs'>
              <div>
                <article>
                  <blockquote>
                    <hr />
                    <h2>From Props Drilling to Context API</h2>
                    <hr />
                    <p>
                      The hell of passing state from one component to the other
                      is basically solved using Context API. To handle it we
                      have to summon the useContext from React.
                    </p>
                    <hr />
                  </blockquote>
                </article>
              </div>
            </div>
            <div className='col-1-3 remove-gutter-xs'>
              <div>
                <article>
                  <blockquote>
                    <hr />
                    <h2>Functions are actually Object</h2>
                    <p>
                      Hmmm... Yea I said it and I struggled to wrap my brain on
                      this matter. Until I realise that the internal property
                      named <code>[[Call]]</code> makes the difference. The
                      internal call property are not accessible via code but
                      rather define the behavior of code as it executes.
                      ECMAScript defines multiple internal properties for
                      objects in Javascript, and these internal propeq are
                      indicated by double-square-bracket notation.
                    </p>
                    <hr />
                  </blockquote>
                </article>
              </div>
            </div>
            <div className='col-1-3 remove-gutter-xs'>
              <div>
                <article>
                  <blockquote>
                    <hr />
                    <h2>Async and Await</h2>
                    <hr />
                    <p>
                      There is a beauty is understanding how and when to use
                      async then invote the power of await. Async in short words
                      besically orders a function to return a promise and Await
                      is a commander to me as he holds all other operations from
                      executing until he is done with his job. If you think my
                      brief analogy is wrong hit me up.
                    </p>
                    <hr />
                  </blockquote>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature2 />
    </>
  );
};

export default Features;
