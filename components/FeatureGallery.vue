<template>
  <div class="c-featureGallery">
    <div class="c-featureGallery-nav">
      <div class="c-featureGallery-nav-inner">
        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/clock.png" alt="Clock Icon">
          <p>Clock</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/bookmark.png" alt="Bookmarks Icon">
          <p>Bookmarks</p>
        </div>
        
        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/cloudy.png" alt="Weather Icon">
          <p>Weather</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/file.png" alt="Notes Icon">
          <p>Notes</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/calendar.png" alt="Calendar Icon">
          <p>Calendar</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/search.png" alt="Search Icon">
          <p>Web Search</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/stats.png" alt="Charts Icon">
          <p>Charts</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/settings.png" alt="Settings Icon">
          <p>Settings</p>
        </div>

        <div class="c-featureGallery-linkItem">
          <img src="/images/featureGallery/add.png" alt="And Much More">
          <p>And more...</p>
        </div>
      </div>
    </div>

    <div class="c-featureGallery-content">
      <h4>Basic Blocks</h4>
      <p>All of the basic blocks shown here can be added out of the box with no effort to give your pages a simple starting point.</p>
      <p>From a simple clock and localised weather widgets to focused productivity tooling like Notes and Todo lists to help you stay on track</p>

      <br><br>

      <h4>Customise every block</h4>
      <p>You can change almost everything about a block, from the fonts and colours they use, to the amount of space they take up in your page.</p>
      <p>Layout each block in whatever order you want to get the best fit for you.</p>

      <br><br>

      <h4>Advanced Blocks</h4>
      <p>We also support an ecosystem of advanced blocks added by the community. Extending what you can do with your start page.</p>
      <p>Learn more about building advanced blocks in our Developer pages.</p>
    </div>
  </div>
</template>

<style scoped>
.c-featureGallery {
  min-height: 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

@media (max-width: 1000px) {
  .c-featureGallery {
    flex-direction: column;
  }
}

.c-featureGallery-nav {
  background-color: #FCFAF8;
  min-height: 450px;
  width: 40%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: right;
  padding: 20px 20px;
  padding-right: 50px;
}

.c-featureGallery-nav-inner {
  width: 400px;
  float: right;
}

@media (max-width: 1200px) {
  .c-featureGallery-nav {
    padding: 40px 0;
  }
}

@media (max-width: 1000px) {
  .c-featureGallery-nav {
    width: 100%;
    padding: 40px;
    margin-bottom: 20px;
    min-height: 0;
    text-align: center;
  }

  .c-featureGallery-nav-inner {
    width: 100%;
  }
}

.c-featureGallery-linkItem {
  display: inline-block;
  text-align: center;
  margin: 20px;
  border-radius: 10px;
}

.c-featureGallery-linkItem img {
  width: 85px;
  height: 85px;
  padding: 10px;
  cursor: pointer;
  border: 5px solid #FCFAF8;
  transition: border 0.15s ease-in-out;
}

.c-featureGallery-linkItem img:hover {
  border: 0px solid #FCFAF8;
}

.c-featureGallery-content {
  padding: 30px 50px;
  flex-grow: 1;
}

.c-featureGallery-content p {
    margin-bottom: 10px !important;
  }

@media (max-width: 1000px) {
  .c-featureGallery-content {
    text-align: center;
  }


}


</style>