import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import './typewriter.css'
const Typewriter = () => {
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length
      var fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      var that = this
      var delta = 200 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick()
      }, delta)
    }
    var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    return () => {
      setrefresh({ refresh: !refresh })
    }
  }, [refresh])
  return (
    <div className="typewriter">
      <strong>Features</strong>
      <Typography variant="body" className="writer">
        <strong
          className="typewrite"
          data-period="3000"
          data-type='[ "Homescreen access.", 
                "Offline support.", "SEO ready.", "Easy to customize." ]'
        >
          <span className="wrap"></span>
        </strong>
        <span className="blinking-cursor">|</span>
      </Typography>
    </div>
  )
}

export default Typewriter