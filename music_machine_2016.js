
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

  Meteor.startup(function () {

});


  Template.playground.helpers({

    "startdac": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();

        } else if (starter.start==0){
          stopAll();

        }
      }
      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "hh_fill": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },

    "vibe": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.vibe==1) {
          playArp();

        } else if (starter.vibe==0) {

          stopArp();

        }
      }
      return Session.get('vibe');
    },

    "leadFx": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.leadfx==1) {
          playArp();

        } else if (starter.leadfx==0) {

          stopArp();

        }
      }
      return Session.get('leadfx');
    },

   

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#sliderSpeed').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
      }
    },
  "sliderVol1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider.vol1);
        setVolume1(slider.vol1/50);
        return slider.vol1;
      }
    },
  "sliderVol2":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider2').data('uiSlider').value(slider.vol2);
        setVolume2(slider.vol2/50);
        return slider.vol2;
      }
    },
  "sliderVol3":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider3').data('uiSlider').value(slider.vol3);
        setVolume3(slider.vol3/50);
        return slider.vol3;
      }
    },
  "sliderVol4":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider4').data('uiSlider').value(slider.vol4);
        setVolume4(slider.vol4/50);
        return slider.vol4;
      }
    },
  "sliderVol5":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider5').data('uiSlider').value(slider.vol5);
        setVolume5(slider.vol5/50);
        return slider.vol5;
      }
    },
  "freq1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#sliderFreq1').data('uiSlider').value(slider.freq1);
        Template.instance().$('#sliderRes1').data('uiSlider').value(slider.res1);
        filter1(slider.freq1, slider.res1);
        return slider.freq1;
      }
    },
  "freq2":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#sliderFreq2').data('uiSlider').value(slider.freq2);
        Template.instance().$('#sliderRes2').data('uiSlider').value(slider.res2);
        filter2(slider.freq2, slider.res2);
        return slider.freq2;
      }
    },
  "freq3":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#sliderFreq3').data('uiSlider').value(slider.freq3);
        Template.instance().$('#sliderRes3').data('uiSlider').value(slider.res3);
        filter3(slider.freq3, slider.res3);
        return slider.freq3;
      }
    },
  "freq4":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#sliderFreq4').data('uiSlider').value(slider.freq4);
        Template.instance().$('#sliderRes4').data('uiSlider').value(slider.res4);
        filter4(slider.freq4, slider.res4);
        return slider.freq4;
      }
    },
    "res1": function(){
      return MusicMachine.findOne().res1;
    },
    "res2": function(){
      return MusicMachine.findOne().res2;
    },
    "res3": function(){
      return MusicMachine.findOne().res3;
    },
    "res4": function(){
      return MusicMachine.findOne().res4;
    },

  });


  Template.playground.events({

     "click button.startButton": function () {
      var val = MusicMachine.findOne({});
      console.log("1");
      if (val.start==0){
      Session.set('startdac', 1);
      MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
      } else if (val.start==1){
      Session.set('startdac', 0);
      MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
      }
    },

  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handlersp = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#sliderSpeed').data('uiSlider')) {
        $("#sliderSpeed").slider({
            slide: handlersp,
            min: 0,
            max: 100
        });
    }

    var handlerVol1 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {vol1: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            orientation: "vertical",
            slide: handlerVol1,
            range: "min",
            min: 0,
            max: 50
        });
    }

    var handlerVol2 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {vol2: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider2').data('uiSlider')) {
        $("#slider2").slider({
            orientation: "vertical",
            slide: handlerVol2,
            range: "min",
            min: 0,
            max: 50
        });
    }

    var handlerVol3 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {vol3: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider3').data('uiSlider')) {
        $("#slider3").slider({
            orientation: "vertical",
            slide: handlerVol3,
            range: "min",
            min: 0,
            max: 50
        });
    }

    var handlerVol4 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {vol4: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider4').data('uiSlider')) {
        $("#slider4").slider({
            orientation: "vertical",
            slide: handlerVol4,
            range: "min",
            min: 0,
            max: 50
        });
    }

    var handlerVol5 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {vol5: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider5').data('uiSlider')) {
        $("#slider5").slider({
            orientation: "vertical",
            slide: handlerVol5,
            range: "min",
            min: 0,
            max: 50
        });
    }

    var handlerFreq1 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {freq1: ui.value}});
    }, 50, { leading: false });
    var handlerRes1 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {res1: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#sliderFreq1').data('uiSlider')) {
        $("#sliderFreq1").slider({
            slide: handlerFreq1,
            animate:true,
            range: "min",
            min: 0,
            max: 10000
        });
    }
    if (!this.$('#sliderRes1').data('uiSlider')) {
        $("#sliderRes1").slider({
            slide: handlerRes1,
            animate:true,
            range: "min",
            min: 0,
            max: 10
        });
    }

    var handlerFreq2 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {freq2: ui.value}});
    }, 50, { leading: false });
    var handlerRes2 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {res2: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#sliderFreq2').data('uiSlider')) {
        $("#sliderFreq2").slider({
            slide: handlerFreq2,
            animate:true,
            range: "min",
            min: 0,
            max: 10000
        });
    }
    if (!this.$('#sliderRes2').data('uiSlider')) {
        $("#sliderRes2").slider({
            slide: handlerRes2,
            animate:true,
            range: "min",
            min: 0,
            max: 10
        });
    }

    var handlerFreq3 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {freq3: ui.value}});
    }, 50, { leading: false });
    var handlerRes3 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {res3: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#sliderFreq3').data('uiSlider')) {
        $("#sliderFreq3").slider({
            slide: handlerFreq3,
            animate:true,
            range: "min",
            min: 0,
            max: 10000
        });
    }
    if (!this.$('#sliderRes3').data('uiSlider')) {
        $("#sliderRes3").slider({
            slide: handlerRes3,
            animate:true,
            range: "min",
            min: 0,
            max: 10
        });
    }

    var handlerFreq4 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {freq4: ui.value}});
    }, 50, { leading: false });
    var handlerRes4 = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {res4: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#sliderFreq4').data('uiSlider')) {
        $("#sliderFreq4").slider({
            slide: handlerFreq4,
            animate:true,
            range: "min",
            min: 0,
            max: 3000
        });
    }
    if (!this.$('#sliderRes4').data('uiSlider')) {
        $("#sliderRes4").slider({
            slide: handlerRes4,
            animate:true,
            range: "min",
            min: 0,
            max: 10
        });
    }
  });
}

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({
        start:0, 
        slide: 50, 
        vol1: 0, 
        vol2: 0, 
        vol3: 0, 
        vol4: 0, 
        vol5: 0, 
        freq1: 10000, 
        freq2: 10000, 
        freq3: 10000, 
        freq4: 10000,
        res1:0,
        res2:0,
        res3:0,
        res4:0,
      });

    }

}