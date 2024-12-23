import styles from "../.././../ui/dashbord/users/userid/userid.module.css";
import Image from "next/image";
import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="User Avatar" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id.toString()} />

          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            defaultValue={String(user.isAdmin)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={String(user.isActive)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
