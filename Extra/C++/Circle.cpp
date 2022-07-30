#include <graphics.h>
#include <conio.h>
#include <windows.h>
#include <tchar.h>
#include <strsafe.h>

int main(void)
{
	int gd=DETECT,gm;
	initgraph(&gd,&gm,(char *)"");
	setfillstyle(SOLID_FILL,GREEN);
	circle(200,200,100);
	floodfill(201,201,WHITE);
	SetConsoleTitle( TEXT( "Durdane Teacher" ) );
	TCHAR szOldTitle[MAX_PATH];
    TCHAR szNewTitle[MAX_PATH];
   if( GetConsoleTitle(szOldTitle, MAX_PATH) )
   {
      // Build new console title string.

      StringCchPrintf(szNewTitle, MAX_PATH, TEXT("%s"), szOldTitle);

      // Set console title to new title
      if( !SetConsoleTitle(szNewTitle) )
      {
         _tprintf(TEXT("SetConsoleTitle failed (%d)\n"), GetLastError());
         return 1;
      }
      else
      {
         _tprintf(TEXT("SetConsoleTitle succeeded.\n"));
      }
   }
	getch();
	closegraph();
} 