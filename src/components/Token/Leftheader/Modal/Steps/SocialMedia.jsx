import styles from "./SocialMedia.module.css";
import { ImFacebook } from "react-icons/im";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const SocialMedia = () => {
  const items = [
    {
      title: "Facebook",
      icon: ImFacebook,
      color: "#5380DE",
      iconSize: 20,
    },
    {
      title: "Youtube",
      icon: FaYoutube,
      color: "#E83939",
      iconSize: 18,
    },
    {
      title: "Twitter",
      icon: AiOutlineTwitter,
      color: "#2AA3EF",
      iconSize: 20,
    },
    {
      title: "Telegram",
      icon: FaTelegramPlane,
      color: "#45AEE4",
      iconSize: 19,
    },
  ];

  return (
    <div className={styles.socialMediaContainer}>
      {items.map(item => (
        <div className={styles.inputWrapper} style={{ borderColor: item.color }}>
          <div className={styles.leftInput} style={{ backgroundColor: item.color }}>
            <item.icon size={item.iconSize} />
          </div>
          <input className={styles.socialInput} type="text" placeholder={item.title} />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
