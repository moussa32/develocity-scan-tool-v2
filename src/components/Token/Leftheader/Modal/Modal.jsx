import styles from './Modal.module.css'
import icon from '../../../../assets/images/popup.png'
import { Placeholder } from '../../../common/Placeholder/Placeholder';
import { useTranslation } from 'react-i18next';
export function Modal({logo,name, symbol,isnotlisted}) {
  const {t}=useTranslation(['token'])
  return (
    <>
      <span
        className="px-2 py-1 mt-2 me-2 d-inline-block"
        style={{
          backgroundColor: "rgba(136, 136, 136,0.2)",
          cursor: "pointer",
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {" "}
        {t("token:view_more")} <img src={icon} height="18" alt="" />
      </span>
      <div
        className={`modal fade ${styles.fade2}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                
            <div className="py-2">
            <span className="">
              {logo ? (
                <img alt={name}
                  className={styles.tokenImg}
                  src={logo}
                 
                />
              ) : (
                <div className='d-inline-block'> 
                <div className={styles.icon_token_letter1}>
                  <h6 className={styles.icon_token_text1}>
                    {name
                      ?name.charAt(0)
                      : null}
                  </h6>
                </div>
                </div>
              )}
            </span>
            <span className={`${styles.name}`}>
              {name ? name : <><Placeholder styling={ {width:'100px',height:'20px'}}/> </>}
            </span>
            <span className={`ms-2 px-2 h-50 fw-light me-2 ${styles.symbol}`}>
              {symbol ? symbol : <><Placeholder styling={ {width:'80px',height:'20px'}}/></>}
            </span>
            <span className="ms-2">
              {isnotlisted && isnotlisted? (
                <>
                  <span className=" me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#9F4AE8"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                </>
              ) : null}
            </span>
          </div>


              <button
                type="button"
                className={styles.closeBtn}
                data-bs-dismiss="modal"
                aria-label="Close"
              >{t("token:close")} x</button>
            </div>
            <div className={`modal-body ${styles.modalwrapper}`}>
              <h3 className='text-muted'>
                About <span className='text-decoration-underline'>  {name && name} </span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                itaque laudantium, possimus alias odio, veritatis provident
                assumenda corrupti consectetur soluta ducimus velit et.
                Voluptatem cumque natus illum possimus officiis doloribus!
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("token:close")}
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
