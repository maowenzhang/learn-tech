// learnc++.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"

#include <string>

void testStringCrashWhenAssignNullptr()
{
	const char* pChar = nullptr;
	std::string tmp(pChar);
}

int main()
{
	std::string(foo);
	std::string("foo");
	std::string({ "foo" });

	testStringCrashWhenAssignNullptr();

    return 0;
}

