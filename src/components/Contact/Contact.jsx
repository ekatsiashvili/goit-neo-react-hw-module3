import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.npWrapper}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
