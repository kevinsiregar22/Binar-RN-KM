package com.intro;

import org.devio.rn.splashscreen.SplashScreen; // here
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  //screen
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "intro";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

}
