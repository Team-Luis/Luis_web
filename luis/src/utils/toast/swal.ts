import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const showToast = (icon: any, title: string) => {
  Toast.fire({
    icon,
    title,
  });
};

class LuisToast {
  public successToast(title: string) {
    showToast("success", title);
  }

  public errorToast(title: string) {
    showToast("error", title);
  }

  public infoToast(title: string) {
    showToast("info", title);
  }

  public warnToast(title: string) {
    showToast("warning", title);
  }
}

const luisToast = new LuisToast();
export default luisToast;
