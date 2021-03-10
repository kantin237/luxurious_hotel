import React from 'react'

export default function Footer(props) {
    return (
        <footer class="untree_co--site-footer">

        <div class="container">
          <div class="row">
            <div class="col-md-4 pr-md-5">
              <h3>{props.colOneTitle}</h3>
              <p>{props.colOneDescription}</p>
              <p><a href="#" class="readmore">{props.colOneMore}</a></p>
            </div>
            <div class="col-md-8 ml-auto">
              <div class="row">
                <div class="col-md-3">
                  <h3>{props.colTwoTitle}</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">{props.colTwoNav1}</a></li>
                    <li><a href="#">{props.colTwoNav2}</a></li>
                    <li><a href="#">{props.colTwoNav3}</a></li>
                    <li><a href="#">{props.colTwoNav4}</a></li>
                    <li><a href="#">{props.colTwoNav5}</a></li>
                    <li><a href="#">{props.colTwoNav6}</a></li>
                  </ul>
                </div>
                <div class="col-md-9 ml-auto">
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <h3>{props.colThreeTitle}</h3>
                      <address>{props.colThreeAddress1} <br />{props.colThreeAddress2} </address>
                    </div>
                    <div class="col-md-6">
                      <h3>{props.colfourTitle}</h3>
                      <p>
                        <a href="#">{props.colfourTel1}</a> <br />
                        <a href="#">{props.colfourTel2}</a>
                      </p>
                    </div>
                  </div>

                  <h3 class="mb-0">{props.colfournewsletter}</h3>
                  <p>{props.colfournewsletterDescr}</p>
                  <form action="#" method="" class="form-subscribe">
                    <div class="form-group d-flex">
                      <input type="email" class="form-control mr-2" placeholder="Enter your email" />
                      <input type="submit" value="Subscribe" class="btn btn-black px-4 text-white" />
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
          <div class="row mt-5 pt-5 align-items-center">
            <div class="col-md-6 text-md-left">
              <p>
                Copyright &copy; {new Date().getFullYear()} <a href="index.html"></a>. All Rights Reserved. Design by <a href="https://untree.co/" target="_blank" class="text-primary"></a>
              </p>
            
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="icons-top icons-dark">
              <li>
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-tripadvisor"></span></a>
              </li>
            </ul>

            </div>
          </div>
        </div>
        
      </footer>
    )
}
