package ch.eigenverbrauchsmanager.service;

import java.util.ArrayList;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import ch.eigenverbrauchsmanager.model.Phone;

@Service("itemService")
public class ItemServiceImpl implements ItemService{
	
	private static final AtomicLong counter = new AtomicLong();

	private static List<Phone> phones;
	
		
	
	static{
		// computers= populateDummyComputers();
		// phones= populateDummyPhones();
		// printers= populateDummyPrinters();
		
	}
	
	public List findItemsByCategory(String category) {

	return phones;

	}

	public Object findItemById(long id, String category) {
		if(category.equalsIgnoreCase("phones")){
			for(Phone phone : phones){
				if(phone.getId() == id){
					return phone;
				}
			}
		} 
		return null;
	}
	


}
