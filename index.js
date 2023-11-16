let imageBox = document.getElementById("ImageBox")
let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("qrImage")
let button = document.getElementById("actionButton")

button.addEventListener("click", () => {
  if(qrText.value.length == 0) {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    }, 400)
    return
  }
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
  imageBox.classList.add('show-img')
})

