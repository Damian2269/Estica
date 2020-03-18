$(window).on("load", function() {
				$('.menuContainer').addClass('menuNaDol');
				$('.rozjasnianieWejscie').addClass('rozjasnianieAnimacja');
			});

			
			
var czy_wysuniete=false;
			
function wysunFormularz()
{
	if(!czy_wysuniete)
	{
		$('.zadajPytanieContainer').addClass('zadajPytanieAnimacja');
		/*$('.websiteContainer').addClass('websiteContainerZadajPytanieAnimation');*/
		czy_wysuniete=true;
	}
	else
	{
		$('.zadajPytanieContainer').removeClass('zadajPytanieAnimacja');
		/*$('.websiteContainer').removeClass('websiteContainerZadajPytanieAnimation');*/
		czy_wysuniete=false;
	}
}
    
	

