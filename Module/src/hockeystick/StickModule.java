/**
 * This file was auto-generated by the Titanium Module SDK helper for Android
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 */
package hockeystick; 
 
import net.hockeyapp.android.CrashManager;
import net.hockeyapp.android.ExceptionHandler;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

import org.appcelerator.titanium.TiApplication;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.kroll.common.TiConfig;


@Kroll.module(name="Stick", id="hockeystick")
public class StickModule extends KrollModule
{

	// Standard Debugging variables
	private static final String LCAT = "StickModule";
	private static final boolean DBG = TiConfig.LOGD;

	// You can define constants with @Kroll.constant, for example:
	// @Kroll.constant public static final String EXTERNAL_NAME = value;
	
	public StickModule()
	{
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app)
	{
		Log.d(LCAT, "inside onAppCreate");
	}

	// Methods
	@Kroll.method
	public void registerManager(String identifier)
	{
		CrashManager.register(getActivity(), identifier);
	}
	
	// Methods
	@Kroll.method
	public void reportCrash(String exception)
	{
		ExceptionHandler handler = new ExceptionHandler(null, null, true);
		handler.saveExceptionData(exception);
	}
	
	// Methods
	@Kroll.method
	public void sendCrashes() 
	{
		CrashManager.submitStackTraces(getActivity(), null);
	}
}

